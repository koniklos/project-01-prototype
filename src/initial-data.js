const initialData = {
  agents: {
    "agent-1": { id: "agent-1", name: "Agent #1" },
    "agent-2": { id: "agent-2", name: "Agent #2" },
    "agent-3": { id: "agent-3", name: "Agent #3" },
    "agent-4": { id: "agent-4", name: "Agent #4" },
    "agent-5": { id: "agent-5", name: "Agent #5" },
    "agent-6": { id: "agent-6", name: "Agent #6" },
    "agent-7": { id: "agent-7", name: "Agent #7" },
    "agent-8": { id: "agent-8", name: "Agent #8" },
    "agent-9": { id: "agent-9", name: "Agent #9" },
    "agent-10": { id: "agent-10", name: "Agent #10" },
    "agent-11": { id: "agent-11", name: "Agent #11" },
    "agent-12": { id: "agent-12", name: "Agent #12" },
    "agent-13": { id: "agent-13", name: "Agent #13" },
    "agent-14": { id: "agent-14", name: "Agent #14" },
    "agent-15": { id: "agent-15", name: "Agent #15" },
    "agent-16": { id: "agent-16", name: "Agent #16" },
    "agent-17": { id: "agent-17", name: "Agent #17" },
    "agent-18": { id: "agent-18", name: "Agent #18" },
    "agent-19": { id: "agent-19", name: "Agent #19" },
    "agent-20": { id: "agent-20", name: "Agent #20" },
  },
  groupLeaders: {
    "unassigned": {
      id: "unassigned",
      name: "Unassigned Agents",
      agentIds: ["agent-3", "agent-6", "agent-7", "agent-10", "agent-12", "agent-15", "agent-16"]
    },
    "groupLeader-1": {
      id: "groupLeader-1",
      name: "Group Leader #1",
      agentIds: ["agent-1", "agent-4", "agent-9", "agent-14"]
    },
    "groupLeader-2": {
      id: "groupLeader-2",
      name: "Group Leader #2",
      agentIds: ["agent-5", "agent-11", "agent-18", "agent-19", "agent-20"]
    },
    "groupLeader-3": {
      id: "groupLeader-3",
      name: "Group Leader #3",
      agentIds: ["agent-2", "agent-8", "agent-13", "agent-17"]
    }
  },
  groupLeadersOrder: ["unassigned", "groupLeader-1", "groupLeader-2", "groupLeader-3"]
};

export default initialData;
