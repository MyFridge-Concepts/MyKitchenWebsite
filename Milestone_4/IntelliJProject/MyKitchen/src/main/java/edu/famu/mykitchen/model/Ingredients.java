package edu.famu.mykitchen.model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ingredients {
    @DocumentId
    private String ingredientId;
    private String name;
    private String category;
}