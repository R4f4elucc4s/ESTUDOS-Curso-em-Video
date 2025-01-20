package aula04;
public class Aula04 {
   public static void main(String[] args) {
/**Caneta c1 = new Caneta();

c1.setModelo(" BIC");

c1.setPonta(0.5f);
//c1.ponta = 0.5f; dá erro pois, não acessa diretamente  por causa do private. 

c1.status();
       
   System.out.println("Tenho uma Caneta" + c1.getModelo() +" de ponta "+ c1.getPonta()); 
   
Caneta c2 = new Caneta();
c2.setModelo("Polly");
c2.setPonta(0.7f);

       System.out.println("A caneta c2 se chama "+c2.getModelo()+" e possui ponta de "+ c2.getPonta());
        -- USANDO MODELO GET E SET -- 
----------------------------------------------------------*/
   Caneta c1 = new Caneta("Aquarela","ROXA",0.9f);
   c1.status();
   
   Caneta c2 = new Caneta("kkkkkk","Verde",0.6f);
   c2.status();
   }
}
