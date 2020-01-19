import React from 'react'

class NavBar extends React.Component {
	render() {
		return(
			<div class="center">
        		<label class="panel"> Joseph James - Software Engineer | Email: TheCubeOfSpheres@gmail.com | Cell: 305-283-9503 | <a target='_blank' href="https://github.com/Jo7ephJames?tab=repositories">GitHub Link</a> </label> 
   				<ul className="section--social" className="navbar-nav">

			        {/* Links to relevant professional social media & resume -->
			            See: http://fontawesome.io/icons/#brand for more -->
			        	Link to Linked In profile */}
			    
			        <li className="socialWrapper" >
			          <a className="color--skyBlue social"
			             title="LinkedIn Profile"
			             target="_blank"
			             href={this.props.data.links.linkedIn}>
			            <i className="fa fa-linkedin"></i>
			          </a>
			        </li>
 					{/* Link to GitHub profile */}
			        
			        <li className="socialWrapper color--skyBlue">
			          <a className="social color--skyBlue"
			             title="GitHub Profile"
			             target="_blank"
			             href={this.props.data.links.github}>
			            <i className="fa fa-github"></i>
			          </a>
			        </li>
			        {/* Link to resume, probably a .pdf */}	
			        <li className="socialWrapper">
			          <a className="social color--skyBlue"
			             title="Resume"
			             href={this.props.data.links.resume}>
			            <i className="fa fa-file-text"></i>
			          </a>
			        </li>
			      </ul>
   			</div>    
		)
	}
}

export default NavBar 