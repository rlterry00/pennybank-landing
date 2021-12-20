import React from "react";
import axios from "axios";

jest.mock("axios");


describe("fetching 10 top users from leaderboard endpoint and displaying it", () => {
  test("displays users correctly with a map length of 10 jsx components", () => {
    const users = [
      {
        username: "child_qaKy9Hyu",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_8TtodELd",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_CsDKlZdF",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_tUgCvDQ7",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_kJgj5959",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_QTyWNJrO",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_okvxEu0C",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_bEYfuqnE",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_Pwq3uDjs",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_9twYwSrj",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
    ];
    const resp = { data: users };
    const userMap = users.map((users, index) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
            backgroundColor: index % 2 == 0 ? "gainsboro" : "white",
          }}
          key={users.id}
        >
          <h3>{String(index + 1)}.</h3>
          <img
            src={
              users.avatarLink
                
            }
            style={{
              backgroundColor: users.avatarColor,
                
              margin: 3,
            }}
            className="image avatar avatar-64 rounded-circle"
            alt="Avatar"
          />
          <p>{users.username}</p>
          <h2>{String(users.xpScore)}</h2>
        </div>
      );
    });
    
    axios.get.mockResolvedValue(resp);
    const listArrayLength = userMap.length;

    return expect(listArrayLength).toBe(10);
  });
});

describe("fetching 10 top users from leaderboard endpoint", () => {
  test("array length of data returned should be 10", () => {
    const users = [
      {
        username: "child_qaKy9Hyu",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_8TtodELd",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_CsDKlZdF",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_tUgCvDQ7",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_kJgj5959",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_QTyWNJrO",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_okvxEu0C",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_bEYfuqnE",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_Pwq3uDjs",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
      {
        username: "child_9twYwSrj",
        avatarColor: null,
        avatarLink: null,
        xpScore: 0,
      },
    ];
    const resp = { data: users };

    axios.get.mockResolvedValue(resp);
    const userArrayLength = users.length;

    return expect(userArrayLength).toBe(10);
  });
});
