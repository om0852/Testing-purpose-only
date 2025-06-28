import GradientButton from "./component";
      
      export default function ButtonExample() {
        return (
          <div className="flex items-center justify-center h-screen">
            <GradientButton
              label="Press "
              onClick={() => alert("Button clicked!")}
            />
          </div>
        );
      }