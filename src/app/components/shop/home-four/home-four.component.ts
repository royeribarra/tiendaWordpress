import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'app-home-four',
    templateUrl: './home-four.component.html',
    styleUrls: ['./home-four.component.sass']
})
export class HomeFourComponent implements OnInit {
    public banners = [];
    public currencies = ['USD', 'EUR'];
    public currency:any;
    public flags = [
        { name:'English', image: 'assets/images/flags/gb.svg' },
        { name:'German', image: 'assets/images/flags/de.svg' },
        { name:'French', image: 'assets/images/flags/fr.svg' },
        { name:'Russian', image: 'assets/images/flags/ru.svg' },
        { name:'Turkish', image: 'assets/images/flags/tr.svg' }
    ]
    public flag:any;

    products: Product[];

    indexProduct: number;
    shoppingCartItems: CartItem[] = [];
    wishlistItems  :   Product[] = [];
    contentLoaded = false;


    public slides = [
        { title: 'Gran Venta', subtitle: 'Hasta 70% Descuento', image: 'assets/images/banner/1.jpg' },
        { title: 'Grandes Descuento', subtitle: 'Revisa la promociòn', image: 'assets/images/banner/2.jpg' },
        { title: 'Gran Venta', subtitle: 'No te lo pierdas', image: 'assets/images/banner/3.jpg' },
        { title: 'Nuestros mejores productos', subtitle: 'Seleccion especial', image: 'assets/images/banner/4.jpg' },
        { title: 'Venta Masiva', subtitle: 'Solo por hoy', image: 'assets/images/banner/5.jpg' }
    ];

    constructor(private productService: ProductService,  private cartService: CartService) {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);

    }

    ngOnInit() {
        this.productService.getBanners()
        .subscribe(
            data => this.banners = data
        );

        this.productService.getProducts()
            .subscribe(
                (product: Product[]) => {
                    this.products = product
                }
            )
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);

    }

    public changeCurrency(currency){
        this.currency = currency;
    }

    public changeLang(flag){
        this.flag = flag;
    }
}