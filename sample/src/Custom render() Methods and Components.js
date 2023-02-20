class Countdown extends React.Component {
    renderTimeLeft() {
      // […]
    }
  
    renderTimePassed() {
      // […]
    }
  
    render() {
      const { currentDate, eventDate } = this.props;
      if (currentDate < eventDate) {
        // currentDate is before eventDate so render countdown
        return this.renderTimeLeft();
      }
      // time is over so render how much time has passed since then
      return this.renderTimePassed();
    }
  }

  const TextField = ({ id, label, ...HTMLInputAttributes }) => (
    <p>
      <label for={id}>{label}</label>
      <br />
      <input {...HTMLInputAttributes} id={id} />
    </p>
  );
  export default TextField;
export const CustomComponent = () =>{
//   render() {
    return (
      <form>
        <TextField name="email" label="Email" id="email" type="email" />
        <TextField name="password" label="Password" id="password" type="password" />
        <input type="submit" value="Send" />
      </form>
    );
//   }
}