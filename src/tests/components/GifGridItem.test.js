import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas en GifGridItem.js", () => {

    const title = "un titulo";
    const url = "un url http:";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test("Debe mostrar el componente correctamente", () => {

        expect(wrapper).toMatchSnapshot();

    });

    test("Debe tener un párrafo con el title", () => {
        
        const textoParrafo = wrapper.find("p");
        
        expect(textoParrafo.text().trim()).toBe(title);

    });

    test("Debe tener la imagen igual al url y alt de los props", () => {

        const img = wrapper.find("img")
        //console.log(img.prop("src"))
        //console.log(img.prop("alt"))
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
        
    });

    test("Debe tener animate__fadeIn", () => {

        const div = wrapper.find("div")
        //console.log(div.prop("className"))
        expect(div.prop("className").includes("animate__fadeIn")).toBe(true)
    });
    
});