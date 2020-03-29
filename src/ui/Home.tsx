import * as React from "react";
import { PersonInterface } from "./types/Person.interface";
import { PeopleContainer } from "./People/PeopleContainer";
import { PageLayout } from "./components/Layout/PageLayout";
import { peopleManager } from "./People/service/PeopleManager";
import { ContentStatuses } from "./enums/ContentStatuses.enum";
import { ApiContent } from "./types/ApiContent";
import { SpinnerComponent } from "react-element-spinner";
import { people as mockPeople } from "../mockData/people";
import { PageHeaderWithLogo } from "./components/PageHeader/PageHeaderWithLogo/PageHeaderWithLogo";

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
      content: mockPeople,
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
        <PageHeaderWithLogo headline="Tracking" />
        <PeopleContainer updatePeople={this.updatePeople} people={people} />
      </PageLayout>
    );
  }
}

interface HomeState {
  people: ApiContent<PersonInterface[]>;
}
