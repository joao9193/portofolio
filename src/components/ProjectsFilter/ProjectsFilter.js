import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiWayland, SiAndroidstudio, SiApple, SiUnity, SiGooglechrome, SiBitcoin } from "react-icons/si";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "Website" ? "active" : null}
        aria-label="Filter by WebSite"
        onClick={() => filter("website")}
      >
        <SiWayland />
      </Button>
      <Button
        type="button"
        className={filterBy === "iOS" ? "active" : null}
        aria-label="Filter by iOS"
        onClick={() => filter("iOS")}
      >
        <SiApple />
      </Button>
      <Button
        type="button"
        className={filterBy === "Android" ? "active" : null}
        aria-label="Filter by Android"
        onClick={() => filter("Android")}
      >
        <SiAndroidstudio />
      </Button>
      <Button
        type="button"
        className={filterBy === "Blockchain" ? "active" : null}
        aria-label="Filter by Blockchain"
        onClick={() => filter("blockchain")}
      >
        <SiBitcoin />
      </Button>
      <Button
        type="button"
        className={filterBy === "Game" ? "active" : null}
        aria-label="Filter by Game"
        onClick={() => filter("game")}
      >
        <SiUnity />
      </Button>
      <Button
        type="button"
        className={filterBy === "Extension" ? "active" : null}
        aria-label="Filter by Browser Extension"
        onClick={() => filter("extension")}
      >
        <SiGooglechrome />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
