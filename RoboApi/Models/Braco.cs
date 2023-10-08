public class Braco {

    public Braco(Guid Id, string Lado, int Cotovelo, int Pulso) {
        this.Id = Id;
        this.Lado = Lado;
        this.Cotovelo = Cotovelo;
        this.Pulso = Pulso;
    }

    public Braco(string Lado, int Cotovelo, int Pulso) {
        this.Lado = Lado;
        this.Cotovelo = Cotovelo;
        this.Pulso = Pulso;
    }
    
    public Guid Id { get; set; }
    public string Lado { get; set; }
    public int Cotovelo { get; set; }
    public int Pulso { get; set; }

}