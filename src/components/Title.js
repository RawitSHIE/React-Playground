import React, {Component} from 'react';

const TITLE = [
    'a software Engineer',
    'a music lover',
    'an enthusiastic learner',
    'an girl seeker',
    'a weird man'
];

class Title extends Component {
    state = { titleIndex : 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({fadeIn : false}), 2000)
        this.animateTitles();
    }
    
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout)
    }
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;

            this.setState({ titleIndex , fadeIn: true})

            this.timeout = setTimeout(() => this.setState({fadeIn : false}), 2000);

        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLE[titleIndex];
        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        );
    }
}

export default Title;