import * as React from "react";
import { PersonInterface } from "./types/Person.interface";
import { PeopleContainer } from "./People/PeopleContainer";
import { StatusBar } from "./StatusBar";
import { Roles } from "./enums/Roles.enum";
import { Statuses } from "./enums/Statuses.enum";
import { PageLayout } from "./components/Layout/PageLayout";
import { peopleManager } from "./People/service/PeopleManager";
import { ContentStatuses } from "./enums/ContentStatuses.enum";
import { ApiContent } from "./types/ApiContent";
import { SpinnerComponent } from "react-element-spinner";

export class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      people: new ApiContent({
        contentStatus: ContentStatuses.LOADING,
        content: [],
      }),
    };
  }

  componentDidMount = async () => {
    await peopleManager.get([]);

    const people = new ApiContent<PersonInterface[]>({
      contentStatus: ContentStatuses.OK,
      content: [
        {
          id: 1,
          name: "billy",
          role: Roles.DOCTOR,
          status: Statuses.AT_RISK,
        },
        {
          id: 2,
          name: "billy",
          role: Roles.NURSE,
          status: Statuses.BEING_TESTED,
        },
        {
          id: 3,
          name: "billy",
          role: Roles.PATIENT,
          status: Statuses.OK,
        },
        {
          id: 4,
          name: "billy",
          role: Roles.STAFF,
          status: Statuses.INFECTED,
        },
        {
          id: 5,
          name: "billy",
          role: Roles.DOCTOR,
          status: Statuses.INFECTED,
        },
      ],
    });

    this.setState({ people });
  };

  updatePeople = (people: ApiContent<PersonInterface[]>) => {
    this.setState({ people });
  };

  render() {
    const { content, contentStatus } = this.state.people;

    if (contentStatus === ContentStatuses.LOADING) {
      return <SpinnerComponent loading={true} position="global" />;
    }

    const people = content as PersonInterface[];

    return (
      <PageLayout>
        <StatusBar people={people} />
        <PeopleContainer updatePeople={this.updatePeople} people={people} />
      </PageLayout>
    );
  }
}

interface HomeState {
  people: ApiContent<PersonInterface[]>;
}
