import React from 'react';
import { gql,useQuery } from '@apollo/client';

const GET_LAUNCHES_QUERY = gql`
	{
		launchesPast(limit: 13) {
	    	links {
	  			flickr_images
	    	}
	    	id
	    	launch_site {
	  			site_name_long
	    	}
	    	mission_name
	  	}
	}
`;

const Body = () => {
	const { loading, error, data } = useQuery(GET_LAUNCHES_QUERY);
 	if (loading) return <p style={{textAlign: "center", color: "rgb(6, 156, 84)"}}>Loading...</p>;
  	if (error) return <p style={{textAlign: "center"}}>Error :(</p>;

  	// only filtering data that have image in launchesPast object
  	const launches = data.launchesPast.filter(
  		launch => launch.links.flickr_images.length > 0
  	)

	return (
		<main className="main_body">
			<section className="section centering_container">
				<div className="container_body">
					{launches.map((launch) => (
						<div className="rocket_content">
							<img 
								className="" 
								src={launch.links.flickr_images[1]} 
								alt="img">
							</img>
							<div className="rocket_name">
								<h3>
									{launch.mission_name}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export default Body;

