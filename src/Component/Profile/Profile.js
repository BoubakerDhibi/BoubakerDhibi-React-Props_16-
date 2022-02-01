import "./profile.css";
function Profile(props){
    return(
        <div className="profile">
        <img src={props.imge} width="700"  />
        <h1>{props.fullName}</h1>
        <h2>{props.bio} - {props.profession}</h2>
        </div>
    );

}

export default Profile;