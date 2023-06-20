import React, { useState, useEffect, useMemo } from "react";
import Team from "./Team";

const TeamList = () => {
	const teamList = [
		{
			name: "Team1",
			channels: [
				{ name: "Channel1", id: 1 },
				{ name: "Channel2", id: 2 },
			],
		},
		{
			name: "Team2",
			channels: [
				{ name: "Channel1", id: 1 },
				{ name: "Channel2", id: 2 },
			],
		},
	];

	const [input, setInput] = useState("");
	const [data, setData] = useState(teamList);

	function addChannel(teamName, channelName) {
		// console.log("teamName", teamName);
		// console.log("channelName", channelName);

		let newArr = data.map((el) => {
			// console.log("this is name", el.name);

			if (el.name === teamName) {
				return {
					...el,
					channels: [
						...el.channels,
						{ name: channelName, id: el.channels.length + 1 },
					],
				};
			}

			return el;
		});
		// console.log("this is newArr", newArr);
		// console.log("this is data", data);
		setData(newArr);
	}

	function deleteChannel(teamName, channelName) {
		let newArr = data.map((el) => {
			// console.log("this is name", el.name);

			if (el.name === teamName) {
				return {
					...el,
					channels: el.channels.filter((el2) => el2.name !== channelName),
				};
			}

			return el;
		});
		// console.log("this is newArr", newArr);
		// console.log("this is data", data);
		setData(newArr);
	}

	return (
		<div className="w-50 mx-auto">
			<div className="card w-35 mt-50 mx-auto px-10 py-15">
				<div className="layout-column" data-testid="team-list">
					{data.map((team, id) => (
						<Team
							key={id}
							id={id}
							team={team}
							addChannel={addChannel}
							deleteChannel={deleteChannel}
						/>
					))}
				</div>
				<hr />
				<div className="layout-row">
					<input
						placeholder="Enter Team Name"
						className="team-list-input w-75"
						data-testid="team-name-input"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						className="team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
						data-testid="add-team-btn"
						disabled={
							input === "" ||
							data.map((el) => el.name).some((el) => el === input)
								? true
								: false
						}
						onClick={() => {
							setData([...data, { name: input, channels: [] }]);
							setInput("");
						}}
					>
						Add Team
					</button>
				</div>
			</div>
		</div>
	);
};

export default TeamList;
