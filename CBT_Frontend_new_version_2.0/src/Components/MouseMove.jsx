import { useEffect, useState } from "react";


export const MouseMove = () => {

    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    // const [deviceType, setDeviceType] = useState('');
  
   
    // check if it is a touch device
    // const isTouchDevice = () => {
    //   try {
    //     document.createEvent('TouchEvent');
    //     setDeviceType('touch');
    //     return true;
    //   } catch (e) {
    //     setDeviceType('mouse');
    //     return false;
    //   }
    // };
   
    const move = (e) => {
      const touchEvent = e.touches ? e.touches[0] : null;
      const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
      const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;
   
      setCursorX(x);
      setCursorY(y);
   
      // Set the cursor border's position directly
      const cursorBorder = document.getElementById('cursor-border');
      if (cursorBorder) {
        cursorBorder.style.left = `${x}px`;
        cursorBorder.style.top = `${y}px`;
      }
    };

    useEffect(() => {
      document.addEventListener('mousemove', move);
      document.addEventListener('touchmove', move);
      return () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('touchmove', move);
      };
    }, []);
   
    return (
      <div className="cursor-none">
        <style>
          {`
          #cursor {
              position: absolute;
              background-color:#ffc700;
              height: 10px;
              width: 10px;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              pointer-events: none;
              transition: background-color 0.2s ease;
              z-index:99999
          }
   
          #cursor-border {
              position: absolute;
              width: 50px;
              height: 50px;
              background-color: transparent;
              border: 3px solid grey;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              pointer-events: none;
              transition: all 0.2s ease-out;
              z-index:99999
          }
        `}
        </style>
        <div
          id="cursor"
          style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
        ></div>
        <div id="cursor-border"></div>
      </div>
    );
}
