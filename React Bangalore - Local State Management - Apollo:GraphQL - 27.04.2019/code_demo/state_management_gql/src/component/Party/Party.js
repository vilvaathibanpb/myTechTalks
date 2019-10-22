import React from 'react'
import './Party.css'
import { Mutation } from 'react-apollo'
import { ADD_VOTE, GET_PARTY } from '../../apollo/queries';

const Party = (props) => {
	return (
		<Mutation
			mutation={ADD_VOTE}
			variables={{ name: props.data.name }}
			refetchQueries={[
				{
					query: GET_PARTY,
				},
			]}
		>
			{(mutate, { loading, error }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>An error occurred</p>;

				return (
					<div className="p-container">
						<div className="details">
							<img src={props.data.pic} className="profile-pic" alt="dp" />
							<p className="name">{props.data.candidate}</p>
							<p className="party">{props.data.name}</p>
							<img src={props.data.flag} className="flag" alt="dp" />
						</div>
						<div className="vote-btn" onClick={mutate}>Vote</div>
						<div className="count">Count: {
							props.vote.map((e, i) => {
								if (e.party === props.data.name) {
									return <span key={i}>{e.count}</span>
								}
								return null
							})
						}</div>
					</div>
				);
			}}
		</Mutation>

	);
}

export default Party;