import React from 'react';
import { StudentGroup } from '../types';
import { PageState } from '../App';

interface OrgNameClickableProps {
  org: StudentGroup;
  setPageState: (state: PageState) => void;
  className?: string;
}

const OrgNameClickable: React.FC<OrgNameClickableProps> = ({ org, setPageState, className }) => {
  const handleClick = () => {
    setPageState({ page: 'groupDetail', orgId: org.id });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      className={`${className ?? ''} cursor-pointer text-blue-600 hover:underline`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {org.name}
    </span>
  );
};

export default OrgNameClickable;
