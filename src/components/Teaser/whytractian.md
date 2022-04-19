<!--
  this is only a draft so i don't have to rewrite the code 
  all over again
-->

<!--
JSX

...
    <div className="Container">
      <div className="Card">
        <span>Plug &#38; Play Sensor</span>
        <img
          src={Motor}
          alt="3D model of motor with Tractian's sensor"
          className="Image"
        />
      </div>

      <div className="Card">
        <span>Online Monitoring</span>
        <img
          src={MotorTablet}
          alt="3D model of motor sensor alongside tablet"
          className="Image"
        />
      </div>

      <div className="Card">
        <span>Asset Management</span>
        <img
          src={PlatformScreen}
          alt="Tractian's platform on screen"
          className="Image"
        />
      </div>
    </div>



CSS

    .Teaser>.ContentWrapper>.Container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 100%;
      gap: 3rem;
    }

    .Teaser>.ContentWrapper>.Container>.Card {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      background: var(--white);
      height: 425px;
      width: 340px;
      border-top: 10px solid var(--klein-blue);
      border-radius: .3rem;
      box-shadow: 0 0 1px 1px var(--mischka);
    }

    .Teaser>.ContentWrapper>.Container>.Card>span {
      text-transform: uppercase;
      color: var(--klein-blue);
      font-family: 'Rubik', sans-serif;
      font-size: 1.12em;
      font-weight: 500;
      margin-top: 40px;
    }

    .Teaser>.ContentWrapper>.Container>.Card>.Image {
      width: 80%;
    }
...
-->
