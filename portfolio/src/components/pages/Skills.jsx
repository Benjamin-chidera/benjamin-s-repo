import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Skills = () => {
  return (
    <div className=" mt-20 mx-7 pb-5" id="skills" data-aos="fade-in">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Skills
      </p>
      <div className="flex gap-12 md:gap-10 items-center flex-wrap mt-5 justify-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          target="_black"
        >
          <img
            src="https://benjamin-dev.netlify.app/assets/html-d4a7db0f.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_black"
        >
          <img
            src="https://benjamin-dev.netlify.app/assets/css-0525acde.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          target="_black"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAeFBMVEX33x4AAAD74h81MAbv2R3cxhsxLAb/5h//6R+JfBCShBJJQgmrmhUiHwTv1x3z2x5mXAw6NAejkxTo0Rzfyxu1oxbJtRgbGAMqJgUfHATWwRrOuhnEsRgPDgH/7yAWFAN5bQ9SSgpsYg1AOghaUQu9qhcICAGAdRCc1uV+AAAE4UlEQVR4nO2ba3erKhBAdRoDVaNG1KZq0pjn//+HV5vkVBCQPLDn3DX7U1ctYYeXzEAdB0EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5N8HAMg37Q+TVUp51BUDpZFXHPOWY+FFuj99JbH/3sdn8mqBUJYmwduH+83nPEjSjJIJHGcLt8/Kk9ZJWLh3B8xDRuwLzrk632SCQNJgqNcRpGBb0UAQvKVcr2PpWTYcF6Thp9qvHY45/V1Bkur0OkKrbTgmCKN+rpvaNBwRpPW4n+sWFntZLwjsw0RQsThNIXg28XPdgzU/vSCUazNBi8NQK0i3hn7uylof61tQohIkyfCtt/Ns+WkFST6wqwgllJLqwBWqLe5sdIJ0J/j5znWoEei5+1a3DDrBuBE6stdQpL7On31hd/OqEYSM3yScuL0iOXa/+/jTqL8hWK34BuRLdlN8X1nfs+oEiy9+BIouQbqxv6XWCdZrvWBkfz99VwueJ9C5T7Di45Ug/tsES/6ZW03RpfcIMiFUWk8y6MwFHTjwgm6TTW+ofdW9C4LuqZ4w5zEuSCpR0HWTwnokbC7o0KGg+5XUmylSHkaCxJcYuu4iZNMp6jesniJm3/veBG+5cUFVE7acktL2PsZEEOI3lWE7X45TKI4E7qRQC3YRgP0s5ljqYxiXcDSl7ekymjwaSc58+bHdfjZIv42kj77K34pJbpB6oXC74v9idutimIm7BoGtxYFoIugACecKtwtJ/Dupjx+Ip1yyL4bWMoSGgm0jsu1KYdcxiKimFuxOmjxfPVvWhSVDc8HuqG6WKl99S0tT+R7BFkrq3Zfc0NJxxJ2C7XRxSnlas7HTx3cLdoMx9iU9va6tdPIDgp1iJnn/2ZnIDwl2q07ZiIKJlczDg4LdWBSH4on9VYIORGIbZjb6+HHBNmwWQqqjjVlist1S1itscvLnBYeJi9lqRJBAelC0KhUOytJnl2ogxeBLRnwde2EcAdSNsmYq7HD8JwUJnNfLSGgNxtcR8Lc+aLQ7tb/9KKWd91pBEn/HZ2e+qsthwg8N93B2M3iT5t2IMAafOnqnZXL5FD5NuhEWs8PPU0Ly5kd8NqwcPGGD+MS7DuLz6fop834nQySsFOdbLwF4Tf/BMHcJIK7UD6+DAHnv5d70jtYGB9a3SQSZ+OTzyCcGiSMGAavZg35UCMqWjMI3ZDNIod4aQZY12pWb662yrmgmnjSKJ1HGkIGFuysyxrIyHAQZn5s/pU6DUm0bpVXGoogxL5cEouGDPSwRbKsKAsllrF4ITkLJ45Z5cDg0e9lNgfmjNyuAyVSkrPtZDOPrAFe2D6+CIwmqHv1RBExzY0uG4mKfkeFI5uIPRX+eynL8Gp5J0ECkyZP22G64YvrkpcBz22moFKEix17spHsMn+hg06oWw7NCUpk1vfvx9C1COpbja9+kkllIssTEb/+CW46Q6Q0X8jc9xOn47ajD7BXBCDjvmqoS5d0XynZ6xX3+olQ/QKVabta5JgEJqlzHpWiavS4nAyTbDVffxSEcOcAEMksDWYp1nuTw2uwvUHb0D701Z7lNKzLeBECJF/pJf3Pxlvi5R18faLbfOGasOuZhmNft1sQxbYGuYMSyui2ZH2uvLfnixuMqu/3PwP0lyaMlEQRBEOR/xn8B8EAxcZPqawAAAABJRU5ErkJggg=="
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://getbootstrap.com/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/bootstrap-b71e3463.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/tailwind-376f90f0.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://react.dev/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/react-ba3c8415.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://styled-components.com/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/styled-62f62297.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://supabase.com/" target="_black">
          <img
            src="data:image/png;base64,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"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
      </div>
    </div>
  );
};
