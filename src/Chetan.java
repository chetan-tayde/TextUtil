public class Chetan{
    public static void main(String args[]){
     int a = 6;
     int b = 6;
     int c = 7;
     if(b<c){
         c = (10^4)&c;
         c = (b&11)+b;
     }
     if((b+c)<(c-b)){
         c = (5^7)^c;
         c = (b+8)&c;
     }
     System.out.println(a+b+c);
    }
}
