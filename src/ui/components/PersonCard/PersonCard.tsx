import React from "react";
import styles from "./PersonCard.module.scss";
import { PersonInterface } from "../../types/Person.interface";
import { ReactComponent as StatusCircle } from "../../../assets/icons/status-circle.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/send-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit-icon.svg";
import { Link } from "react-router-dom";
import { person } from "../../../mockData/person";
import { Statuses } from "../../enums/Statuses.enum";
import { startCase } from "lodash";
import { personManager } from "../../Person/service/PersonManager";
import { PersonCardVariants } from "../../enums/PersonCardVariants.enum";

export class PersonCard extends React.Component<
  PersonCardProps,
  PersonCardState
> {
  constructor(props: PersonCardProps) {
    super(props);

    this.state = {
      isOpen: false,
      selectedStatus: this.props.person.status,
    };
  }

  handleOpenClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedStatus: e.currentTarget.value as Statuses });
  };

  handleChangeClick = () => {
    const { person } = this.props;

    person.status = this.state.selectedStatus;

    personManager.setStatus(person.id, person);
  };

  render() {
    const { role, firstname, lastname, status } = this.props.person;
    return (
      <div className={styles.container} data-card-variant={this.props.variant}>
        <div
          className={styles.status__symbol}
          data-state={status ? status : "UNKNOWN"}
        >
          <StatusCircle width="100%" height="auto" />
        </div>
        <Link to={`/person/${person.id}`}>
          <div className="person-info__container">
            <div className="txt__body--2 txt-left">
              <span>{status}</span>
              <span>
                {this.props.variant === PersonCardVariants.SLIM
                  ? ` - ${role}`
                  : ""}
              </span>
            </div>
            <div className="txt__h5 txt-left">{`${firstname} ${lastname}`}</div>
          </div>
        </Link>
        <div
          style={{ position: "relative" }}
          className={styles["person-actions__container"]}
        >
          <button className={styles["action-send"]}>
            <SendIcon />
          </button>
          <button onClick={this.handleOpenClick} className="action-edit">
            <EditIcon />
          </button>

          {this.state.isOpen && (
            <div className={styles.edit__options}>
              <select
                onChange={this.handleSelectChange}
                value={this.state.selectedStatus}
              >
                {Object.values(Statuses).map((status) => (
                  <option key={status} value={status}>
                    {startCase(status)}
                  </option>
                ))}
              </select>
              <button
                onClick={this.handleChangeClick}
                className={styles.options__btn}
              >
                Change
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

interface PersonCardProps {
  person: PersonInterface;
  variant: PersonCardVariants;
}

interface PersonCardState {
  isOpen: boolean;
  selectedStatus: Statuses;
}
