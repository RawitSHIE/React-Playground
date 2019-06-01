import React, {Component} from 'react';
import Projects from './Projects';
import Profiles from  './Profiles'
import profilepic from '../assets/profile.png';
import Jokes from './Jokes'
import Title from './Title'
class App extends Component {
    state = { displayBio : false};
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('component', this);
    //     this.toggleButton = this.toggleButton.bind(this);

    // }
    toggleButton = () => {
        this.setState({ displayBio : !this.state.displayBio} )
    }

    render() {
        let bio = this.state.displayBio ?
                (<div>
                    <p>I'm a handsome man</p>
                    
                    <p>I'm also very goodat lying</p>
                    <button onClick={this.toggleButton}>Show less..</button>
                </div>) : 
                (<div>
                    <button onClick={this.toggleButton}>Read more..</button>
                </div>);
        

        return (
            <div>
                <img src={profilepic} alt='profile' className="profile"/>
                <h1>Hello I'm Rawitshie</h1>
                <p>My name is Rawit Lohakhachonrphan</p>
                {this.state.displayBio ? <Title /> : null}
                <p>I'm always looking for exp</p>
                { bio }
                <hr />
                <Projects />
                <hr />
                <Profiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;
