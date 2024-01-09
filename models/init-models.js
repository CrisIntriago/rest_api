var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _customercustomerdemo = require("./customercustomerdemo");
var _customerdemographics = require("./customerdemographics");
var _customers = require("./customers");
var _employees = require("./employees");
var _employeeterritories = require("./employeeterritories");
var _orderdetails = require("./orderdetails");
var _orders = require("./orders");
var _products = require("./products");
var _region = require("./region");
var _shippers = require("./shippers");
var _suppliers = require("./suppliers");
var _territories = require("./territories");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var customercustomerdemo = _customercustomerdemo(sequelize, DataTypes);
  var customerdemographics = _customerdemographics(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var employeeterritories = _employeeterritories(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var region = _region(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var territories = _territories(sequelize, DataTypes);

  customerdemographics.belongsToMany(customers, { as: 'CustomerID_customers', through: customercustomerdemo, foreignKey: "CustomerTypeID", otherKey: "CustomerID" });
  customers.belongsToMany(customerdemographics, { as: 'CustomerTypeID_customerdemographics', through: customercustomerdemo, foreignKey: "CustomerID", otherKey: "CustomerTypeID" });
  employees.belongsToMany(territories, { as: 'TerritoryID_territories', through: employeeterritories, foreignKey: "EmployeeID", otherKey: "TerritoryID" });
  orders.belongsToMany(products, { as: 'ProductID_products', through: orderdetails, foreignKey: "OrderID", otherKey: "ProductID" });
  products.belongsToMany(orders, { as: 'OrderID_orders', through: orderdetails, foreignKey: "ProductID", otherKey: "OrderID" });
  territories.belongsToMany(employees, { as: 'EmployeeID_employees', through: employeeterritories, foreignKey: "TerritoryID", otherKey: "EmployeeID" });
  products.belongsTo(categories, { as: "Category", foreignKey: "CategoryID"});
  categories.hasMany(products, { as: "products", foreignKey: "CategoryID"});
  customercustomerdemo.belongsTo(customerdemographics, { as: "CustomerType", foreignKey: "CustomerTypeID"});
  customerdemographics.hasMany(customercustomerdemo, { as: "customercustomerdemos", foreignKey: "CustomerTypeID"});
  customercustomerdemo.belongsTo(customers, { as: "Customer", foreignKey: "CustomerID"});
  customers.hasMany(customercustomerdemo, { as: "customercustomerdemos", foreignKey: "CustomerID"});
  orders.belongsTo(customers, { as: "Customer", foreignKey: "CustomerID"});
  customers.hasMany(orders, { as: "orders", foreignKey: "CustomerID"});
  employees.belongsTo(employees, { as: "ReportsTo_employee", foreignKey: "ReportsTo"});
  employees.hasMany(employees, { as: "employees", foreignKey: "ReportsTo"});
  employeeterritories.belongsTo(employees, { as: "Employee", foreignKey: "EmployeeID"});
  employees.hasMany(employeeterritories, { as: "employeeterritories", foreignKey: "EmployeeID"});
  orders.belongsTo(employees, { as: "Employee", foreignKey: "EmployeeID"});
  employees.hasMany(orders, { as: "orders", foreignKey: "EmployeeID"});
  orderdetails.belongsTo(orders, { as: "Order", foreignKey: "OrderID"});
  orders.hasMany(orderdetails, { as: "orderdetails", foreignKey: "OrderID"});
  orderdetails.belongsTo(products, { as: "Product", foreignKey: "ProductID"});
  products.hasMany(orderdetails, { as: "orderdetails", foreignKey: "ProductID"});
  territories.belongsTo(region, { as: "Region", foreignKey: "RegionID"});
  region.hasMany(territories, { as: "territories", foreignKey: "RegionID"});
  orders.belongsTo(shippers, { as: "ShipVia_shipper", foreignKey: "ShipVia"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "ShipVia"});
  products.belongsTo(suppliers, { as: "Supplier", foreignKey: "SupplierID"});
  suppliers.hasMany(products, { as: "products", foreignKey: "SupplierID"});
  employeeterritories.belongsTo(territories, { as: "Territory", foreignKey: "TerritoryID"});
  territories.hasMany(employeeterritories, { as: "employeeterritories", foreignKey: "TerritoryID"});

  return {
    categories,
    customercustomerdemo,
    customerdemographics,
    customers,
    employees,
    employeeterritories,
    orderdetails,
    orders,
    products,
    region,
    shippers,
    suppliers,
    territories,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
