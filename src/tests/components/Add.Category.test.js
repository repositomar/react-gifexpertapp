import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe("Pruebas en componente", () => {

    const setCategories = () => {};
    
    test("Debe mostrar el componente correctamente", () => {

        const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        //console.log(wrapper)
        expect(wrapper).toMatchSnapshot();

        
    });
    
});
