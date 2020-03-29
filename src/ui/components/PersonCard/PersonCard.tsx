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
    const { role, name, status } = this.props.person;
    return (
      <div className={styles.container}>
        <div
          className={styles.status__symbol}
          data-state={status ? status : "UNKNOWN"}
        >
          <StatusCircle />
        </div>
        <Link to={`/person/${person.id}`}>
          <div className="person-info__container">
            <div className="txt__body--2 txt-left">
              <span>{status}</span>&bull;<span>{role}</span>
            </div>
            <div className="txt__h5 txt-left">{name}</div>
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
            <div
              style={{
                top: "50px",
                border: "1px solid lightgrey",
                height: "50px",
                backgroundColor: "white",
                position: "absolute",
                right: 0,
              }}
            >
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
              <button onClick={this.handleChangeClick}>Change</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

interface PersonCardProps {
  person: PersonInterface;
}

interface PersonCardState {
  isOpen: boolean;
  selectedStatus: Statuses;
}
