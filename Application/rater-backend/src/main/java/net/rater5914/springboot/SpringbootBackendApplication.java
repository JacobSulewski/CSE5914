package net.rater5914.springboot;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.ElasticsearchException;
import co.elastic.clients.elasticsearch.core.BulkRequest;
import co.elastic.clients.elasticsearch.core.BulkResponse;
import co.elastic.clients.json.JsonData;
import co.elastic.clients.json.JsonpMapper;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import jakarta.json.spi.JsonProvider;
import net.rater5914.springboot.model.*;
import net.rater5914.springboot.repository.*;


@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {
    
    public static void main(String[] args) {
        ElasticsearchTransport transport = new RestClientTransport(RestClient.builder(new HttpHost("localhost", 9200, "http")).build(), new JacksonJsonpMapper());
        ElasticsearchClient esClient = new ElasticsearchClient(transport);

        BulkResponse result = bulkJsonIndex(esClient);

        //SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public void run(String... args) throws Exception {
        
        this.userRepository.save(new User("Alex", "Book", "abook777@gmail.com"));
        this.ratingRepository.save(new Rating("acting", 8.0));
        
    }

    private static JsonData readJson(InputStream input, ElasticsearchClient esClient) {
        JsonpMapper jsonpMapper = esClient._transport().jsonpMapper();
        JsonProvider jsonProvider = jsonpMapper.jsonProvider();
        
        return JsonData.from(jsonProvider.createParser(input), jsonpMapper);
    }
    
    private static BulkResponse bulkJsonIndex(ElasticsearchClient esClient) {
        BulkResponse result = null;
        try {
            System.out.println("User directory is: " + System.getProperty("user.dir"));
            File jsonDirectory = new File(System.getProperty("user.dir") + "/src/main/java/net/rater5914/springboot/documents");
            File[] jsonFiles = jsonDirectory.listFiles();

            BulkRequest.Builder br = new BulkRequest.Builder();
    
            for (File file: jsonFiles) {
                JsonData json = readJson(new FileInputStream(file), esClient);
                br.operations(op -> op
                    .index(idx -> idx
                        .index("movies")
                        .document(json)
                    )
                );
            }
            return esClient.bulk(br.build());
        } catch (ElasticsearchException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
