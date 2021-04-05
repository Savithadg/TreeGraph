import React from "react";

function Stackbar() {
  const data = [
    {
      color: "lightblue",
      percent: 68,
      text: "Total",
      doller: "$1219383774",
      value: 300,
    },
    {
      color: "violet",
      percent: 32,
      text: "Migrated",
      doller: "$467837",
      value: 114,
    },
  ];
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="container" align="left">
            <div className="App">
              <div className="BarChart">
                {data &&
                  data.map((d) => {
                    return (
                      <spam
                        class="col"
                        style={{
                          background: `${d.color}`,
                          height: `${d.percent}px`,
                          align: "center",
                        }}
                      >
                        <p>{d.value}</p>
                      </spam>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="container">
            <p>Hiiiiii</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stackbar;
