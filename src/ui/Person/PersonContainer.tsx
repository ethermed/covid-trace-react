import * as React from "react";
import { Person } from "./Person";
import { PersonInterface } from "../types/Person.interface";
import { person } from "../../mockData/person";
import { people } from "../../mockData/people";
import { ApiContent } from "../types/ApiContent";
import { ContentStatuses } from "../enums/ContentStatuses.enum";
import { PageLayout } from "../components/Layout/PageLayout";

export class PersonContainer extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super(props);

    this.state = {
      pageContent: new ApiContent({
        content: { person: {} as PersonInterface, peopleAtRisk: [] },
        contentStatus: ContentStatuses.LOADING,
      }),
    };
  }

  componentDidMount = () => {
    const pageContent = new ApiContent({
      content: { person, peopleAtRisk: people },
      contentStatus: ContentStatuses.OK,
    });
    this.setState({ pageContent });
  };

  render() {
    const { pageContent } = this.state;

    const { content, contentStatus } = pageContent;

    if (contentStatus === ContentStatuses.LOADING) {
    }

    return (
      <PageLayout>
        <Person person={content!.person} peopleAtRisk={content!.peopleAtRisk} />
      </PageLayout>
    );
  }
}

interface PersonProps {
  id: number;
}

interface PersonState {
  pageContent: ApiContent<PersonContainerPageContent>;
}

interface PersonContainerPageContent {
  person: PersonInterface;
  peopleAtRisk: PersonInterface[];
}
