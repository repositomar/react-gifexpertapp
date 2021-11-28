import { getGifs } from '../../helpers/getGifs';


describe("Pruebas con getGif fetch", () => {

    test("Debe de traer 10 elementos", async () => {
        
        const gifs = await getGifs("HOLA");

        expect(gifs.length).toBe(10);

    });

    test("Debe de traer arreglo vacío", async () => {
        
        const gifs = await getGifs("");
        //console.log(gifs)
        expect(gifs.length).toBe(0);

    });

    
});
