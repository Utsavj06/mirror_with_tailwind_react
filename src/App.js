import NameEntry from './components/NameEntry';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  return (
    <div className="lg:flex w-full h-screen">
        <NameEntry styles=" bg-red-400 flex justify-center content-center w-2/6 lg:w-7/12" EnteredName="Your Name"/>
        <Button styles={"lg:h-screen w-12 lg:w-1/5 flex justify-center text-3xl border-8"} name={"Mirror Me"}/>
        <Display styles="bg-red-400 flex justify-center content-center w-2/6 lg:w-8/12 text-2xl border-8" displayName="Mirror Name" />
    </div>
  );
}

export default App;
