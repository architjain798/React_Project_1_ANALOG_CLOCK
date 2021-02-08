import "./styles.css";
export default function App() {
  return (
    <>
      <div id="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
        {setInterval(() => {
          let d = new Date();
          let htime = d.getHours();
          let mtime = d.getMinutes();
          let stime = d.getSeconds();
          let hrotation = 30 * htime + mtime / 2;
          let mrotation = 6 * mtime;
          let srotation = 6 * stime;

          hour.style.transform = `rotate(${hrotation}deg)`;
          minute.style.transform = `rotate(${mrotation}deg)`;
          second.style.transform = `rotate(${srotation}deg)`;
        }, 1000)}
      </div>
    </>
  );
}
