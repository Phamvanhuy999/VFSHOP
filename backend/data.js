import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Admin',
      email: 'Admin@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Test1',
      email: 'test1@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Test2',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      
      name: "Iphone 13 promax",
      slug: "Iphone13promax",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-17.png",
      price: 120,
      countInStock: 10,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
     
      name: "Iphone 13",
      slug: "Iphone13",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-10.png",
      price: 120,
      countInStock: 0,
      brand: "Apple",
      rating: 4.5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    { 
      name: "Iphone12",
      slug: "Iphone 12",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/image-removebg-preview_637547045799326930.png",
      price: 120,
      countInStock: 12,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
      
      name: "Iphone 11",
      slug: "Iphone11",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/iphone%2011%20(11).png",
      price: 120,
      countInStock: 3,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
      
      name: "Iphone 12 mini",
      slug: "Iphone12mini",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/11/06/apple-iphone-12-mini.png",
      price: 120,
      countInStock: 6,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
     
      name: "Samsung Galaxy A73 - Chính hãng",
      slug: "SamsungGalaxyA73-Chính hãng",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/10/image-removebg-preview.png",
      price: 120,
      countInStock: 6,
      brand: "Samsung",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
      
      name: "Samsung Galaxy Z Fold3",
      slug: "Samsung GalaxyZFold3",
      category: "Mobile Phone",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/08/11/bac2.png",
      price: 120,
      countInStock: 6,
      brand: "Samsung",
      rating: 5,
      numReviews: 10,
      description: "Topmobilephoneintheworld",
    },
    {
      
      name: "Laptop HUAWEI MATEBOOK D15",
      slug: "LaptopHUAWEIMATEBOOKD15",
      category: "Laptop",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/10/image-removebg-preview.png",
      price: 120,
      countInStock: 6,
      brand: "Huawei",
      rating: 5,
      numReviews: 10,
      description: "Top laptop in the world",
    },
    {
      
      name: "Apple Watch Series 7 ",
      slug: "AppleWatchSeries7 ",
      category: "Clock",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/10/08/apple-watch-s7-3.png",
      price: 120,
      countInStock: 6,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
      
      name: "Máy tính bảng Apple iPad Pro M1",
      slug: "MáytínhbảngAppleiPadProM1",
      category: "Table",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/22/anh-1.PNG",
      price: 120,
      countInStock: 6,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
    {
     
      name: "Điện thoại di động POCO M4 Pro ",
      slug: "ĐiệnthoạidiđộngPOCOM4Pro ",
      category: "Mobile",
      image:
        "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/12/07/image-removebg-preview-7.png",
      price: 120,
      countInStock: 6,
      brand: "Oppo",
      rating: 3,
      numReviews: 10,
      description: "Top mobilephone in the world",
    },
  ],
};
export default data;
