# Dt (DroidTable)

# dT (DroidTable)

Welcome to dT (DroidTable), a lightweight, customizable table library built with vanilla JavaScript, CSS, and HTML. dT aims to provide a simple yet powerful solution for creating and managing tables in web applications. Whether you're displaying data, building a dashboard, or creating an admin panel, dT can streamline your table management process.

## Features

- **Lightweight**: Built with vanilla JavaScript, CSS, and HTML, dT is lightweight and doesn't depend on any external libraries or frameworks.
- **Customizable**: Easily customize the appearance and behavior of your tables using CSS and JavaScript.
- **Responsive**: dT tables are designed to be responsive, ensuring they look great on a variety of devices and screen sizes.
- **Sorting and Filtering**: Sort and filter your table data with ease, enhancing the user experience and making data analysis more efficient.
- **Pagination**: Handle large datasets efficiently by paginating your tables, improving performance and usability.
- **Easy Integration**: Integrate dT into your projects effortlessly with simple HTML markup and minimal setup required.

## Getting Started

### Installation

To get started with dT, simply include the `droidtable.js` and `droidtable.css` files in your project:

```html
<link rel="stylesheet" href="droidtable.css">
<script src="droidtable.js"></script>
```

### Usage

To create a table using dT, you can use the following HTML markup:

```html
<table id="myTable">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>30</td>
        </tr>
        <!-- Add more rows as needed -->
    </tbody>
</table>
```

Then, initialize dT on your table:

```javascript
var myTable = new DroidTable("#myTable");
```

### Customization

You can customize the appearance and behavior of your tables using CSS and JavaScript. Refer to the `droidtable.css` file for styling options and the `droidtable.js` file for customization methods.

## Examples

Check out the `examples` directory for usage examples and demos of dT in action.

## Contributing

Contributions to dT are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request on GitHub.

## License

dT is licensed under the MIT License. See the `LICENSE` file for more information.

## Support

For support or inquiries, please contact us at support@droidtable.com.

---

Thank you for using dT! We hope it makes managing tables in your web applications a breeze. If you have any questions or feedback, don't hesitate to reach out. Happy coding! 🚀
