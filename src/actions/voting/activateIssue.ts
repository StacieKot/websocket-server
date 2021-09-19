import { Issues, IssueStatus } from '../../types/issue';
import { Store } from '../../types/room';

export const setActiveIssue = (
  roomId: string,
  activeIssueId: string,
  store: Store
): Issues => {
  const room = store[roomId];
  const activeIssue = {
    ...room.issues[activeIssueId],
    status: IssueStatus.active,
    vote: [],
  };
  room.issues = { ...room.issues, [activeIssueId]: activeIssue };
  return room.issues;
};
