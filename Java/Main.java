class Main {
    public static void main(String[] args) {
        System.out.print("Hola mundo");
        Car car= new Car();
        car.license = "AMQ123";
        car.driver = "Andrés Herrera";
        car.passenger = 4;
        System.out.println("Car License: " + car.license);
    }
}