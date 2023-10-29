import React, { Component } from 'react';
import './Prsn.css';
class Prsn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prsn: [
        {
          fullName: 'Ons Jabeur',
          bio: 'Ons Jabeur, née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2010. En devenant nᵒ 2 mondiale dans le classement WTA en 2022, Ons Jabeur est devenue la joueuse tunisienne, arabe et africaine la mieux classée des classements WTA et ATP.',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ons_Jabeur_%2851314432345%29.jpg/375px-Ons_Jabeur_%2851314432345%29.jpg',
          profession: 'joueuse de tennis tunisienne',
        },
        
      ],
    };
  }

  render() {
    const persons = this.state.prsn.map((person, index) => (
      <div key={index}>
        <h1>Full Name: {person.fullName}</h1>
        <p>Profession: {person.profession}</p>
        <p>Bio: {person.bio}</p>
        <img src={person.imgSrc} alt={person.fullName} />
        
      </div>
    ));

    return <div>{persons}</div>;
  }
}

export default Prsn;
