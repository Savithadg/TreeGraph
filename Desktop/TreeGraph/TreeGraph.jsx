import React, { Component, useState, setState, useEffect } from "react";

import * as d3 from "d3";
import dagreD3 from "dagre-d3";
import axios from "axios";
// import tipsy from 'tipsy';

function Tree() {
  const [dataset, setDataset] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/graph`).then((result) => {
      setDataset(result.data);
    });
  });
  node();

  function node() {
    var g = new dagreD3.graphlib.Graph({ directed: true });
    g.setGraph({});

    g.graph().rankdir = "LR";
    g.graph().ranksep = 400;
    g.graph().nodesep = 10;
    // var dataset = [];
    // Create a new directed graph

    dataset.map((data) => {
      g.setNode(data.type, {
        //  labelStyle: "" fontSize: " 2px", fontStyle: "italic" }
        label: data.lable,
        width: data.width,
        height: data.height,
        shape: "rect",
        style: `stroke: ${data.color}; fill:${data.fillcolor}; stroke-width: 1px; `,
        labelStyle: "font: 300 14px 'Helvetica Neue', Helvetica;fill: black;",
      });

      if (!(data.type == "root" || data.type == "root1")) {
        g.setEdge(data.type, data.root, {
          curve: d3.curveBasis,
          style: `stroke: ${data.color}; fill:none; stroke-width: 1px; `,
          arrowheadStyle: `fill: ${data.color}`,
        });
      }
    });

    var svg = d3.select("svg"),
      inner = svg.select("g");

    // // Create the renderer
    var render = new dagreD3.render();
    render(inner, g);
  }

  return (
    <div>
      <svg width="700" height="600">
        <g />
      </svg>
    </div>
  );
}

export default Tree;
