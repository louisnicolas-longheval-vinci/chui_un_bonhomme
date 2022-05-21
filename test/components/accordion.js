import { useState } from "react";
import styles from '../styles/Home.module.css'



export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => setIsShowing(!isShowing);


  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "15px",
        color: "black",
        backgroundColor: "rgb(243 244 246)",
        padding:'0px',
        border: '1px solid lightgray',
        borderRadius: '10px',
        // border: "1px solid rgba(209, 213, 219, 0.5)"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "10px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p style={{padding:'10px'}}>{props.title}</p>
      </button>
      <div 
      className={styles.accordion}
        // style={{ 
        //     background:'white',
        //     borderBottomLeftRadius: '10px',
        //     borderBottomRightRadius: '10px',
        //     display: isShowing ? "block" : "none", padding: "20px" }}
        // dangerouslySetInnerHTML={{
        //   __html: props.content
        // }}
      />
    </div>
  );
}
