package com.walitservices.virementManagment.controllers;

import com.walitservices.virementManagment.dtos.TransferRequestDTO;
import com.walitservices.virementManagment.dtos.TransferStatusUpdateDTO;
import com.walitservices.virementManagment.models.Transfer;
import com.walitservices.virementManagment.services.TransferService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/transfers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TransferController {
    private final TransferService transferService;

    @GetMapping
    private ResponseEntity<List<Transfer>> getAllTransfers(){
        return ResponseEntity.ok(transferService.getAllTransfers());
    }

    @PostMapping
    public ResponseEntity<Transfer> createTransfer(
            @Valid @RequestBody TransferRequestDTO requestDTO) {
        Transfer createdTransfer = transferService.createTransfer(requestDTO);
        return new ResponseEntity<>(createdTransfer, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Transfer> updateTransferStatus(
            @PathVariable Long id,
            @Valid @RequestBody TransferStatusUpdateDTO updateDTO) {

        Transfer updatedTransfer = transferService.updateTransferStatus(id, updateDTO);
        return ResponseEntity.ok(updatedTransfer);
    }

}
