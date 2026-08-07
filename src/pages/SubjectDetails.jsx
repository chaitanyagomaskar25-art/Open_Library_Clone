import React from "react";
import SubjectCard from "../components/subjects/SubjectCard";
import { useParams } from "react-router";

const SubjectDetails = () => {
  const { subject } = useParams();
  return (
    <div>
      <SubjectCard category={subject} />
    </div>
  );
};

export default SubjectDetails;
