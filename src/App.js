import './App.css';
import Props from './components/Propiedades';
import Componente from './components/Componente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';

function App() {
  return (
    <div className="App App-header">
      <Componente msg="Hola soy un componente" />
      <span>---------------------------------------------------------------------------------------</span>
      <Props
        cadena="Esto es una cadena"
        numero={23}
        booleano={true}
        arreglo={[1, 2, 3, 4, 5]}
        objeto={{ nombre: "Brian Olarte", edad: 23 }}
        elementoReact={<i>Esto es un elemento react pasado como una prop</i>}
        funcion={(num) => num * num}
        componente={<Componente msg="Soy un componente pasado desde una prop" />} />
      <span>----------------------------------------------------------------------------------------</span>
      <Estado />
      <span>----------------------------------------------------------------------------------------</span>
      <RenderizadoCondicional />
      <span>----------------------------------------------------------------------------------------</span>
      <RenderizadoElementos />
      <span>----------------------------------------------------------------------------------------</span>
      <EventosES6 />
      <span>----------------------------------------------------------------------------------------</span>
      <EventosES7 />
      <span>----------------------------------------------------------------------------------------</span>
      <MasSobreEventos />
      <span>----------------------------------------------------------------------------------------</span>
      <Padre />
      <span>----------------------------------------------------------------------------------------</span>
      <CicloVida />
      <span>----------------------------------------------------------------------------------------</span>
      <AjaxApis />
      <span>----------------------------------------------------------------------------------------</span>
      <ContadorHooks title='Usuarios' />
    </div>
  );
}

export default App;

