# Basic Microservice Sample
A simple example of how to organize and test .NET Core microservices. This example is based on a register of suppliers that does little more than serve as an example.

# Architecture
The architecture is organized using the principles of SOLID, DRY and YAGNI. With this architecture, the code is organized in layers: Enterprise business rules, Application business rules, interface adapters and User interfaces; and in Entities, Features, Controllers, Repositories, Configurions and Web or Worker Services Applications Sublayers.

## Enterprise Business Rules Layer
Layer responsible for containing the entities and business rules related to the company. It is the most abstract layer of architecture and must be free of any external dependencies

### Entities
Representation of business entities


## Application Business Rules Layer
Layer responsible for implementing the features related to the user story

### Features
User story feature

## Interface Adapters Layer
The "facade". The layer responsible for bridging high-level to low-level layers

### Controllers
Controller workflow for User Interface Application

### Repositories or Datasource Gateway
Gateway for access external data sources

### Configurations
Configuration Layer

## User Interfaces Layer
User interfaces applications

# Tests
We use xUnit as our test framework.

### Unit
A straw-man examples of what our unit tests may look like can be found in test/Unit

### Integration
A straw-man example of how we do integration testing can be found in test/Integration/RegisterSupplierFlow

### Run Tests
```shell
  dotnet test
```
