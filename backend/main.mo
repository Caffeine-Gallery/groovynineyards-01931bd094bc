import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    // Types for our data structures
    type Employee = {
        name: Text;
        title: Text;
        bio: Text;
        photoUrl: Text;
    };

    type Company = {
        name: Text;
        description: Text;
        logoUrl: Text;
        sector: Text;
    };

    // Stable storage for our data
    private stable var employees : [Employee] = [
        {
            name = "John Smith";
            title = "Managing Partner";
            bio = "20+ years of venture capital experience";
            photoUrl = "https://picsum.photos/200/200";
        },
        {
            name = "Sarah Johnson";
            title = "Investment Director";
            bio = "Former startup founder with exits in tech";
            photoUrl = "https://picsum.photos/200/201";
        }
    ];

    private stable var companies : [Company] = [
        {
            name = "TechCorp";
            description = "Revolutionary AI solutions";
            logoUrl = "https://picsum.photos/200/202";
            sector = "Technology";
        },
        {
            name = "GreenEnergy";
            description = "Sustainable energy solutions";
            logoUrl = "https://picsum.photos/200/203";
            sector = "Energy";
        }
    ];

    // Query calls to retrieve data
    public query func getEmployees() : async [Employee] {
        employees
    };

    public query func getCompanies() : async [Company] {
        companies
    };
}
