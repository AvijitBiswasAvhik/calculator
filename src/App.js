import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { divide, evaluate, sign } from "mathjs";

function App() {
  let [value, setValue] = useState({ formula: 0, output: 0, current: 0 });
  let sgin = "+-/*";
  let collect = (e) => {
    setValue((pre) => {
      
     let firstCheck = sgin.includes(pre.current[0])
      if (pre.formula == 0) {
        return {
          ...pre,
          formula:  e.target.value,
          current: e.target.value,
        };
      } else {
        return {
          ...pre,
          formula: pre.formula + e.target.value,
          current: firstCheck ? e.target.value : pre.current + e.target.value,
        };
      }
    });
  };
  function calculate(e) {
    e.stopPropagation();
    let justify = !sgin.includes(
      value.formula[value.formula.length - 1]
    );
    if (justify && value.formula) {
      setValue((pre) => {
        return { ...pre, output: evaluate(pre.formula), current: 0 };
      });
    }else{
      setValue((pre) => {
        return { ...pre, output: 'NAN', current: 0 };
      });
    }
    
  }
  console.log(value);
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <div className="calclutor">
        <div className="calculator-box">
          <div className="formula-screen">{value.formula || ""}</div>
          <div id="display" className="output-screen">
            {value.output || value.current}
          </div>
          <div className="calculator-btn-box">
            <button
              value="AC"
              id="ac"
              className="calculator-btn"
              onClick={(e) => {
                e.stopPropagation();
                setValue({ formula: 0, output: 0,current:0 });
              }}
            >
              AC
            </button>
            <button
              value="/"
              id="divide"
              className="calculator-btn"
              onClick={(e) => {
                e.stopPropagation();
                let justify = !sgin.includes(
                  value.formula[value.formula.length - 1]
                );
                if (value.formula && justify) {
                  setValue((pre) => {
                    return { ...pre, formula: pre.formula + e.target.value, current: e.target.value };
                  });
                }
              }}
            >
              /
            </button>
            <button
              value="*"
              id="multiply"
              className="calculator-btn"
              onClick={(e) => {
                e.stopPropagation();
                let justify = !sgin.includes(
                  value.formula[value.formula.length - 1]
                );
                if (value.formula && justify) {
                  setValue((pre) => {
                    return { ...pre, formula: pre.formula + e.target.value,current: e.target.value };
                  });
                }
              }}
            >
              x
            </button>
            <button
              value="7"
              id="seven"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              7
            </button>
            <button
              value="8"
              id="eight"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              8
            </button>
            <button
              value="9"
              id="nine"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              9
            </button>
            <button
              value="-"
              id="subtract"
              className="calculator-btn"
              onClick={(e) => {
                e.stopPropagation();
                let justify = !sgin.includes(
                  value.formula[value.formula.length - 1]
                );
                if (justify && value.formula == 0) {
                  setValue((pre) => {
                    return { ...pre, formula: e.target.value,current: e.target.value };
                  });
                }else if (justify) {
                  setValue((pre) => {
                    return { ...pre, formula: pre.formula + e.target.value,current: e.target.value };
                  });
                }
              }}
            >
              -
            </button>
            <button
              value="4"
              id="four"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              4
            </button>
            <button
              value="5"
              id="five"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              5
            </button>
            <button
              value="6"
              id="six"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              6
            </button>
            <button
              value="+"
              id="add"
              className="calculator-btn"
              onClick={(e) => {
                e.stopPropagation();
                let justify = !sgin.includes(
                  value.formula[value.formula.length - 1]
                );
                if (value.formula && justify) {
                  setValue((pre) => {
                    return { ...pre, formula: pre.formula + e.target.value,current: e.target.value };
                  });
                }
              }}
            >
              +
            </button>
            <button
              value="1"
              id="one"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              1
            </button>
            <button
              value="2"
              id="two"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              2
            </button>
            <button
              value="3"
              id="three"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              3
            </button>
            <button
              value="="
              id="equals"
              className="calculator-btn"
              onClick={(e) => calculate(e)}
            >
              =
            </button>
            <button
              value="0"
              id="zero"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              0
            </button>
            <button
              value="."
              id="decimal"
              className="calculator-btn"
              onClick={(e) => collect(e)}
            >
              .
            </button>
          </div>
        </div>
        <div className="desginer">
          Designed and Coded By <br />
          <span>Avijit Biswas</span>
        </div>
      </div>
    </div>
  );
}

export default App;
