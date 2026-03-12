package com.walitservices.virementManagment.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class TransferRequestDTO {
    @NotBlank(message = "Sender account is mandatory")
    private String senderAccount;

    @NotBlank(message = "Receiver account is mandatory")
    private String receiverAccount;

    @NotNull(message = "Amount is mandatory")
    @Positive(message = "Amount must be strictly positive")
    private BigDecimal amount;
}
