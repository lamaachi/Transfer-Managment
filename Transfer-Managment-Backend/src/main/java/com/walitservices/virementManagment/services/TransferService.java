package com.walitservices.virementManagment.services;

import com.walitservices.virementManagment.dtos.TransferRequestDTO;
import com.walitservices.virementManagment.dtos.TransferStatusUpdateDTO;
import com.walitservices.virementManagment.exceptions.ResourceNotFoundException;
import com.walitservices.virementManagment.models.Transfer;
import com.walitservices.virementManagment.models.enums.TransferStatus;
import com.walitservices.virementManagment.repositories.TransferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransferRepository transferRepository;

    @Transactional
    public Transfer createTransfer(TransferRequestDTO transferRequestDTO){
        Transfer transfer = Transfer.builder()
                .senderAccount(transferRequestDTO.getSenderAccount())
                .receiverAccount(transferRequestDTO.getReceiverAccount())
                .amount(transferRequestDTO.getAmount())
                .status(TransferStatus.PENDING)
                .executionDate(LocalDateTime.now())
                .build();

        return  transferRepository.save(transfer);
    }


    @Transactional(readOnly = true)
    public List<Transfer> getAllTransfers(){
        return transferRepository.findAll();
    }

    @Transactional
    public Transfer updateTransferStatus(Long id, TransferStatusUpdateDTO transferStatusUpdateDTO){
        Transfer transfer = transferRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Transfer not found with id: " + id));

        transfer.setStatus(transferStatusUpdateDTO.getStatus());
        return transferRepository.save(transfer);
    }

}
