package com.walitservices.virementManagment.dtos;

import com.walitservices.virementManagment.models.enums.TransferStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TransferStatusUpdateDTO {
    @NotNull(message = "Status is mandatory")
    private TransferStatus status;
}
