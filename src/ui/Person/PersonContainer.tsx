import * as React from "react";
import { Person } from "./Person";
import { PersonInterface } from "../types/Person.interface";
import { ApiContent } from "../types/ApiContent";
import { ContentStatuses } from "../enums/ContentStatuses.enum";
import { personManager } from "./service/PersonManager";
import { SpinnerComponent } from "react-element-spinner";

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

  componentDidMount = async () => {
    const pageContent = await personManager.getPageContent(this.props.id);

    this.setState({ pageContent });
  };

  render() {
    const { pageContent } = this.state;

    const { content, contentStatus } = pageContent;

    if (contentStatus === ContentStatuses.ERROR) {
      return (
        <div>There was an error. Page cannot be displayed at this time.</div>
      );
    }

    if (contentStatus === ContentStatuses.LOADING) {
      return <SpinnerComponent loading={true} position="global" />;
    }

    return (
      <Person person={content!.person} peopleAtRisk={content!.peopleAtRisk} />
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

export interface PersonAtRisk extends PersonInterface {
  risk: number;
}
