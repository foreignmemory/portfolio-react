import aboutphoto from '../assets/aboutphoto.jpg';

const AboutMe = () => {
  return ( 
    <div className='box'>
      <h2>About Me</h2>
      <div className='row'>
        <p className='p'>My name is Tristan Perrotti, I am a 25 year old aspiring web developer living in central Florida. I am very creatively driven, I like to focus on design and front end work. Tweaking the styles and formatting of a website to meet or exceed the planned look and functionality is my favorite part of every project. Looking into the future I'd like to expand my knwoledge to video game coding. In my own time I like to make music and hang out with my cats.</p>
        <img className='photo' src={aboutphoto} alt="Photo of Me" />
      </div>
    </div>
   );
}
 
export default AboutMe;