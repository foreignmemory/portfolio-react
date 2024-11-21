const Contact = () => {
  return ( 
    <div className='box'>
      <h2>Contact</h2>
      <form className='form'>
        <label>Name:</label>
        <input type='text' ></input>
        <label>E-mail Address:</label>
        <input type='text'></input>
        <label>Message</label>
        <input type='text'></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
   );
}
 
export default Contact;