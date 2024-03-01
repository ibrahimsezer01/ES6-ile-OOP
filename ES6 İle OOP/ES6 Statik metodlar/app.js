// Statik metodlar & Durağan metodlar
/* 
class GetCube {
    cube(x) {
        return x*x*x;
    }
}

// Obje oluşturarak çalıştırıyoruz
const number = new GetCube();
number.cube(3);

console.log(number);
*/


class GetCube {
    // Obje oluşturmadan kullanabilmemiz için static anahtarı ile tanımladık
    // obje uzerinden erişim sağlanmaz yanlızca class uzerinden ulaşabiliriz
    static cube(x) {
        return x*x*x;
    }

    square(x) {
        return x*x;
    }
}

console.log(GetCube.cube(3));


const a = new GetCube();
// a.cube(3);  // is not a func

// GetCube.sqrt(5);    // buna da doğrudan class uzerinden erişim sağlayamıyoruz, obje ile yapmamız gerek

console.log(a.square(5));