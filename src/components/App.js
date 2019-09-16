import React from 'react';
import '../scss/App.scss';
// import Collapsible from "./Collapsible";
import Share from './Share';
import Design from './Design';
import Form from "./Form";
import PreviewCard from './PreviewCard';
import Landing from './Landing';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInputs: {
        name: 'Maria',
        job: 'Coach',
        phone: '',
        email: 'email.com',
        likedin: '',
        github: ''
      },

      openSection: '',
      readyToCreateCard: true,
      cardShare: {
        link: 'https://awesome-profile-card.com?id=A456DF0001',
        linkDisplay: 'none',
        linkTitle: '',
        twitterLink: 'https://twitter.com/'
      }
    };

    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
    // this.changeIconOpacity = this.changeIconOpacity.bind(this);
  }

  changeShareBtnColor = () => {
    return this.state.readyToCreateCard === true ? '#e17334' : 'lightgrey';
  };

  handleCreateCardClick = () => {
    return this.state.readyToCreateCard === true
      ? this.setState(() => {
        return {
          cardShare: {
            ...this.state.cardShare,
            link:
              'https://awesome-profile-card.com?id=A456DF0001/createdLink',
            linkDisplay: 'flex',
            linkTitle: 'La tarjeta ha sido creada:',
            twitterLink: 'https://twitter.com/'
          }
        };
      })
      : null;
  };

  // changeIconOpacity = () => {
  //   const icons = ['phone', 'email', 'likedin', 'github'];
  //   console.log(this.id)
  //   for (const icon of icons){
  //   }
  // };


  render() {

    return (
      <div className='section__container'>
        <div className='section__container__a'>
          <Landing />
          <PreviewCard 
            name={this.state.userInputs.name}
            job={this.state.userInputs.job}
            iconsList={this.state.userInputs}
          />
        </div>
        <div className='section__container__b'>
          <form className='js-form form'>
            <Design />
            <Form />
            <Share
              shareBtnColor={this.changeShareBtnColor()}
              createCard={this.handleCreateCardClick}
              generatedCard={this.state.cardShare}
            />
          </form>
        </div>
      </div >
    );
  }
}

export default App;
